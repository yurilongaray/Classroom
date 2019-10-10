import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from '../student.controller';

describe('StudentController tests', () => {

    let studentController: StudentController;

    beforeEach(async () => {

        const app: TestingModule = await Test.createTestingModule({
            controllers: [StudentController]
        }).compile();

        studentController = app.get<StudentController>(StudentController);
    });

    it('should return status code 201', () => {

        expect(studentController.getOne(1)).toEqual({
            id: 1,
            name: 'Yuri',
            age: 25
        });
    });
});