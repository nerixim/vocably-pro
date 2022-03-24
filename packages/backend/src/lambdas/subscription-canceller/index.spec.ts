import { subscriptionCanceller } from './index';
import { ScheduledEvent } from 'aws-lambda';
import { inspect } from '../../utils/inspect';

// @ts-ignore
let mockEvent: ScheduledEvent = {
  time: '2022-04-24T18:05:24Z',
};

describe('integration check for subscription-canceller lambda', () => {
  if (process.env.TEST_SKIP_SPEC === 'true') {
    it('skip spec testing', () => {});
    return;
  }

  it('works', async () => {
    const result = await subscriptionCanceller(mockEvent);
    console.log(inspect({ result }));
    expect(Array.isArray(result)).toBeTruthy();
  });
});
