resource "aws_cognito_user_pool" "users" {
  name                     = "vocably-${terraform.workspace}-user-pool"
  auto_verified_attributes = ["email"]
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  admin_create_user_config {
    allow_admin_create_user_only = true
  }

  lifecycle {
    ignore_changes = [
      schema
    ]
  }

  schema {
    attribute_data_type = "String"
    name                = "status"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "String"
    name                = "update_url"
    mutable             = true
    required            = false
  }

  schema {
    attribute_data_type = "String"
    name                = "cancel_url"
    mutable             = true
    required            = false
  }
}

resource "aws_cognito_user_group" "paid" {
  name         = "paid"
  user_pool_id = aws_cognito_user_pool.users.id
  description  = "Paid customers"
}

resource "aws_cognito_identity_provider" "google" {
  user_pool_id  = aws_cognito_user_pool.users.id
  provider_name = "Google"
  provider_type = "Google"

  provider_details = {
    authorize_scopes              = "profile email openid"
    client_id                     = var.google_oauth2_client_id
    client_secret                 = var.google_oauth2_client_secret
    token_url                     = "https://www.googleapis.com/oauth2/v4/token"
    token_request_method          = "POST"
    oidc_issuer                   = "https://accounts.google.com"
    authorize_url                 = "https://accounts.google.com/o/oauth2/v2/auth"
    attributes_url                = "https://people.googleapis.com/v1/people/me?personFields="
    attributes_url_add_attributes = "true"
  }

  attribute_mapping = {
    email    = "email"
    username = "sub"
  }
}

resource "aws_cognito_user_pool_domain" "auth" {
  domain          = local.auth_domain
  certificate_arn = aws_acm_certificate.primary-global.arn
  user_pool_id    = aws_cognito_user_pool.users.id

  depends_on = [aws_route53_record.www]
}

resource "aws_route53_record" "auth-cognito-A" {
  name    = aws_cognito_user_pool_domain.auth.domain
  type    = "A"
  zone_id = data.aws_route53_zone.primary.zone_id
  alias {
    evaluate_target_health = false
    name                   = aws_cognito_user_pool_domain.auth.cloudfront_distribution_arn
    # This zone_id is fixed
    zone_id = "Z2FDTNDATAQYW2"
  }
}

locals {
  auto_sign_in_confirmation_url = "https://${local.app_domain}/${local.auto_sign_in_confirmation_path}"
}

locals {
  available_urls = concat(["https://${local.app_domain}", local.auto_sign_in_confirmation_url], local.dev_urls)
}

resource "aws_cognito_user_pool_client" "client" {
  name                                 = "vocably-${terraform.workspace}-web"
  user_pool_id                         = aws_cognito_user_pool.users.id
  callback_urls                        = local.available_urls
  logout_urls                          = local.available_urls
  allowed_oauth_flows                  = ["code", "implicit"]
  allowed_oauth_scopes                 = ["profile", "email", "openid", "aws.cognito.signin.user.admin"]
  allowed_oauth_flows_user_pool_client = true
  supported_identity_providers         = ["Google", "COGNITO"]
  depends_on                           = [aws_cognito_identity_provider.google]
}

resource "null_resource" "test_user" {

  triggers = {
    user_pool_id = aws_cognito_user_pool.users.id
  }

  provisioner "local-exec" {
    command = "aws cognito-idp admin-create-user --user-pool-id ${aws_cognito_user_pool.users.id} --username ${var.test_user_username} --user-attributes Name=email,Value=${var.test_user_email} --region ${data.aws_region.current.name}"
  }

  provisioner "local-exec" {
    command = "aws cognito-idp admin-set-user-password --user-pool-id ${aws_cognito_user_pool.users.id} --username ${var.test_user_username} --password ${var.test_user_password} --permanent --region ${data.aws_region.current.name}"
  }
}


output "auth_user_pool_id" {
  value = aws_cognito_user_pool.users.id
}

output "auth_client_id" {
  value = aws_cognito_user_pool_client.client.id
}
