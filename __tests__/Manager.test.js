const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');
const manager = new Manager('tai', '1', 'taivonedwards1@gmail.com', '112');

test('test to get the constuctor values for the manage robject', () => {
expect(manager.name).toBe('tai');
expect(manager.id).toBe('1');
expect(manager.email).toBe('taivonedwards1@gmail.com');
expect(manager.officeNumber).toBe('112');
});

test('test to get the name from the getName() method', () => {
    expect(manager.getName()).toBe('tai');
});

test('test to get the id from the getId() method', () => {
    expect (manager.getId()).toBe('1');
});

test('test to get the email from the getEmail() method', () => {
    expect(manger.getEamil()).toBe('taivonedwards1@gmail.com');
});

test('test to get office number from the getOfficeNumber() method', () =>{
    expect(manager.getRole()).toBe('112');
});

test('test to get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

