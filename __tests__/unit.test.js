// unit.test.js

import * as functions from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber returns true for phone number with area code', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for phone number with parentheses', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for phone number without dashes', () => {
  expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber returns false for phone number with missing digits', () => {
  expect(functions.isPhoneNumber('123-45-6789')).toBe(false);
});

test('isEmail returns true for basic email', () => {
  expect(functions.isEmail('student@example.com')).toBe(true);
});

test('isEmail returns true for school email', () => {
  expect(functions.isEmail('test@ucsd.edu')).toBe(true);
});

test('isEmail returns false for email without at symbol', () => {
  expect(functions.isEmail('studentexample.com')).toBe(false);
});

test('isEmail returns false for email without domain extension', () => {
  expect(functions.isEmail('student@example')).toBe(false);
});

test('isStrongPassword returns true for password with letters and numbers', () => {
  expect(functions.isStrongPassword('Password1')).toBe(true);
});

test('isStrongPassword returns true for password with underscore', () => {
  expect(functions.isStrongPassword('abc_123')).toBe(true);
});

test('isStrongPassword returns false when first character is not a letter', () => {
  expect(functions.isStrongPassword('1Password')).toBe(false);
});

test('isStrongPassword returns false when password is too short', () => {
  expect(functions.isStrongPassword('abc')).toBe(false);
});

test('isDate returns true for single digit month and day', () => {
  expect(functions.isDate('1/1/2026')).toBe(true);
});

test('isDate returns true for double digit month and day', () => {
  expect(functions.isDate('12/25/2026')).toBe(true);
});

test('isDate returns false when using dashes', () => {
  expect(functions.isDate('12-25-2026')).toBe(false);
});

test('isDate returns false when year is not four digits', () => {
  expect(functions.isDate('12/25/26')).toBe(false);
});

test('isHexColor returns true for three character hex color', () => {
  expect(functions.isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for six character hex color', () => {
  expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('isHexColor returns false for four character hex color', () => {
  expect(functions.isHexColor('#ffff')).toBe(false);
});

test('isHexColor returns false for invalid hex characters', () => {
  expect(functions.isHexColor('#ggg')).toBe(false);
});
