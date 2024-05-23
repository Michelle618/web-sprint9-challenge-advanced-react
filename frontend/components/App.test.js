import React from 'react'
import {render, waitFor, screen }from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import server from '../../backend/mock-server'
import { resetAppFunctional } from '../../backend/helpers'
import AppFunctional from './AppFunctional.js'

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
  expect(screen.getByText('Welcome to the Grid')).toBeVisible

})

test('can type input and submit it', () => {async
  expect(await screen.findByText('mstaton618 win #32')).toBeVisible

})

test('submit email and get proper message', () => {async
  expect(await screen.findByText('mstaton618 win #32')).toBeVisible
}


test('proper error message - 422 (forbidden email)', () => {async
  expect(await screen.findByText('foo@bar.baz failure #32')).toBeVisible
}


test('coordinates rendering', () => {
  expect(screen.getByText(`Coordinates${(x,y)}`)).toBeVisible

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