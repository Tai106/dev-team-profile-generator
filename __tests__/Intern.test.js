const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');
const intern = new Intern('tai', '1', 'taivonedwards1@gmail.com', 'New York');

test('test to get the constructor values for the enginner object', () => {
    expect(intern.name).toBe('tai');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('taivonedwards1@gmail.com');
    expect(intern.school).toBe('New York');
});

test('test to get the name fromt the getName() method', () => {
    expect(intern.getName()).toBe('tai');
});

test('test to get the id from the getId() method', () => {
    expect (intern.getId()).toBe('1');
});

test('test to get the email from the getEmail() method', () => {
    expect(intern.getEamil()).toBe('taivonedwards1@gmail.com');
});

test('test to get office number from the getSchool() method', () =>{
    expect(intern.getRole()).toBe('New York');
});

test('test to get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});
