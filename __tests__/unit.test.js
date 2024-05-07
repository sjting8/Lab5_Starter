// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//phone number
test('(571)-233-5313 is a valid phone number', () => {
  expect(isPhoneNumber('(571)-233-5313')).toBe(true);
});

test('(222)-222-2222 is a valid phone number', () => {
  expect(isPhoneNumber('(222)-222-2222')).toBe(true);
});

test('5712335313 is not a valid phone number', () => {
  expect(isPhoneNumber('5712335313')).toBe(false);
});
test('5 is not a valid phone number', () => {
  expect(isPhoneNumber('5')).toBe(false);
});

//email
test('sjting@ucsd.edu is a valid email', () => {
  expect(isEmail('sjting@ucsd.edu')).toBe(true);
});

test('123@ucsd.edu is a valid email', () => {
  expect(isEmail('123@ucsd.edu')).toBe(true);
});

test('sjting@ucsd is not a valid email', () => {
  expect(isEmail('sjting@ucsd')).toBe(false);
});

test('sjting is not a valid email', () => {
  expect(isEmail('sjting')).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */

test('sjting8 is a strong password', () => {
  expect(isStrongPassword('sjting8')).toBe(true);
});

test('s_1_bca is a strong password', () => {
  expect(isStrongPassword('s_1_bca')).toBe(true);
});

test('sj1 is not a strong password', () => {
  expect(isStrongPassword('sj1')).toBe(false);
});

test('1236741289734619872346819264 is not a strong password', () => {
  expect(isStrongPassword('1236741289734619872346819264')).toBe(false);
});

// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.

test('11/11/2003 is a valid date', () => {
  expect(isDate('11/11/2003')).toBe(true);
});
test('1/1/2003 is a valid date', () => {
  expect(isDate('1/1/2003')).toBe(true);
});
test('11/11/03 is not a valid date', () => {
  expect(isDate('11/11/03')).toBe(false);
});
test('111/11/2003 is not a valid date', () => {
  expect(isDate('111/11/2003')).toBe(false);
});

// Matches valid 3 or 6 character hex codes used for HTML or CSS.

test('#ABC123 is a valid hex code', () => {
  expect(isHexColor('#ABC123')).toBe(true);
});
test('#FFF is a valid hex code', () => {
  expect(isHexColor('#FFF')).toBe(true);
});
test('#FFFFF is not a valid hex code', () => {
  expect(isHexColor('#FFFFF')).toBe(false);
});
test('#ZZZZZZ is not a valid hex code', () => {
  expect(isHexColor('#ZZZZZZ')).toBe(false);
});