import assert from 'node:assert/strict';
import { test } from 'node:test';
import { countdownState, zonedMidnight } from '../src/utils/countdown.ts';
import { site } from '../src/data/site.ts';

const start = zonedMidnight(site.startDate, site.timeZone);
const end = zonedMidnight(site.endDateExclusive, site.timeZone);

test('conference starts at midnight in Santiago, independently of the visitor time zone', () => {
  assert.equal(new Date(start).toISOString(), '2027-09-01T04:00:00.000Z');
  assert.equal(new Date(end).toISOString(), '2027-09-04T04:00:00.000Z');
});

test('zone resolution accounts for summer time', () => {
  assert.equal(new Date(zonedMidnight('2027-01-01', site.timeZone)).toISOString(), '2027-01-01T03:00:00.000Z');
});

test('countdown breaks remaining time into days, hours, minutes and seconds', () => {
  assert.deepEqual(countdownState(start - 93784000, start, end), {
    phase: 'upcoming', days: 1, hours: 2, minutes: 3, seconds: 4,
  });
  assert.equal(countdownState(start - 1, start, end).seconds, 1);
});

test('conference is underway throughout its three local dates, then finished', () => {
  assert.equal(countdownState(start, start, end).phase, 'ongoing');
  assert.equal(countdownState(end - 1, start, end).phase, 'ongoing');
  assert.deepEqual(countdownState(end, start, end), {
    phase: 'finished', days: 0, hours: 0, minutes: 0, seconds: 0,
  });
});
