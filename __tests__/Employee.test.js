const Employee = require('../lib/Employee');
const employee = new Employee('tai', '1', 'taivonedwards1@gmail.com');

test('test to produce constructor values for the employee object', () => {
    expect(employee.name).toBe('tai');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('taivonedwards1@gmail.com');
});

test('test to get the name from the getNmae() method', () => {
    expect(employee.getName()).toBe('tai');
});

test('test to get the id from the getId() method', () => {
    expect(employee.getId()).toBe('1');
});

test('test to get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('taivonedwards1@gmail.com');
});

test('test to get role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});