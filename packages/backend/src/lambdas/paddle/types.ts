import { PassThrough, SubscriptionStatus } from '@vocably/model';

export type PaddleRawBody = Record<string, string>;

export const alertSubscriptionCreated = 'subscription_created';
export const alertSubscriptionUpdated = 'subscription_updated';
export const alertSubscriptionCancelled = 'subscription_cancelled';

export type PaddleSubscriptionCreated = {
  alert_name: typeof alertSubscriptionCreated;
  cancel_url: string;
  update_url: string;
  passthrough: PassThrough;
  next_bill_date: string;
  status: SubscriptionStatus;
  unit_price: string;
  subscription_plan_id: string;
};

export const isPaddleSubscriptionCreated = (
  obj: any
): obj is PaddleSubscriptionCreated => !!obj.unit_price;

export type PaddleSubscriptionUpdated = {
  alert_name: typeof alertSubscriptionUpdated;
  cancel_url: string;
  update_url: string;
  passthrough: PassThrough;
  next_bill_date: string;
  status: SubscriptionStatus;
  new_unit_price: string;
  subscription_plan_id: string;
};

export type PaddleSubscriptionCancelled = {
  alert_name: typeof alertSubscriptionCancelled;
  passthrough: PassThrough;
  cancellation_effective_date: string;
  status: SubscriptionStatus;
};

export type PaddleEvent =
  | PaddleSubscriptionCreated
  | PaddleSubscriptionUpdated
  | PaddleSubscriptionCancelled;
