import React from 'react'
import {render, waitFor, screen }from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import server from '../../backend/mock-server'
import { resetAppFunctional } from '../../backend/helpers'
import {AppFunctional} from '/.AppFunctional.js'

// describe('AppFunctional Component', () => {
  // let user, email, steps, message, index, x, y,
  afterEach(() => {server.resetHandlers() })
  beforeAll(() => {server.listen() }) 
  afterAll(() => {server.close() })
  beforeEach(async () => {
    resetAppFunctional()
    render(<appFunctional />)
  let user = userEvent.setup()
  })
// })

test('component renders', () => {

})

test('can type input and submit it', () => {

})

test('submit email and get proper message', () => {

})

test('proper error message - 422 (wrong shape for payload in post)', () => {

})

test('coordinates rendering', () => {

})
// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

// test('email placeholder is present', async => () => {
// await waitFor(() => {
//   screen.getByPlaceholderText('type email')
// })
// })

