import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {

    logHello(): void {
        console.log("Hello from Student Service");
    }
}
