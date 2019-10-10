import { StudentController } from '../student.controller';

describe('StudentController 2 tests', () => {

	const studentController = new StudentController();

	it('should getAll bring all students', () => {

		expect(studentController.getAll()).toEqual({});
	});
});