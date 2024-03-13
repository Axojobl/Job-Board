const request = require('supertest');
const server = 'http://localhost:3000';
const dbRouter = require('../../server/routes/dbRouter');
const express = require('express');
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', dbRouter);


describe('db Route', () => {
    describe('get one job', () => {
        it('returns a 200 status if correct id given', async () => {

            const response = await request(app).get('/api/job/25');
            expect(response.status).toBe(200);

        });
    });

    // describe('get all jobs', () => {
    //     it('returns a 200 status if correct id given', async () => {
    //         const response = await request(server).get('/api/job');
    //         expect(response.status).toBe(200);
    //         expect(response.body.length).not.toBe(0);
    //     })
    //     it('return an array of objects', async () => {
    //         const response = await request(server).get('/api/job');
    //         expect(response.body.length).not.toBe(0);
    //     })
    // })

    // describe('create job', () => {
    //     it('returns a 200 status if correct id given', async () => {
    //         const response = await request(server).post('/api/job');
    //         expect(response.status).toBe(200);
    //     })
    //     it('')
    // })













    // describe('update job', () => {
    //     it('returns a 200 status if ')

    // })
})