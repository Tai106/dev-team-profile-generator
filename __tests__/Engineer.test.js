const Employee = require('../lib/Engineer');
const employee = new Employee('tai', '1', 'taivonedwards1@gmail.com');

test('test to produce constructor values for the engineer object', () => {
    expect(engineer.name).toBe('tai');
    expect(engineer.id).toBe('1');
    expect(enginner.email).toBe('taivonedwards1@gmail.com');
    expect(engineer.githubUsername).toBe('tai106');
});

test('test to get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('tai');
});

test('test to get the id from the getId() method', () => {
    expect(enginner.getId()).toBe('1');
});

test('test to get the email from the getEmail() method', () => {
    expect(enginner.getEmail()).toBe('taivonedwards1@gmail.com');
});

test('test to get the email from the getgithubUsername() method', () => {
    expect(enginner.getgithubUsername()).toBe('tai106');
});

test('test to get role from the getRole() method', () => {
    expect(enginner.getRole()).toBe('Employee');
});