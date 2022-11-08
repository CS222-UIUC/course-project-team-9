import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App';
import { createMemoryHistory } from 'history';
import {BrowserRouter, MemoryRouter } from 'react-router-dom';
import {Router, Link} from "react-router-dom";
import SearchBar from './components/SearchBar';
import Title from "./components/Title"
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';

test('test Title component', () => {
  const { getByText } = render(<Title />);
  expect(getByText('BuddyUP')).toBeInTheDocument()
  expect(getByText('Find your study buddy today!')).toBeInTheDocument()
})

test('test About component', () => {
  const { getByText } = render(<About />);
  expect(getByText('This is a UIUC CS222 cource project.')).toBeInTheDocument()
})

test('test Login component', () => {
  const { getByText } = render(<Login />);
  expect(getByText('This will be the log-in page.')).toBeInTheDocument()
})

test('test Register component', () => {
  const { getByText } = render(<Register />);
  expect(getByText('This will be the register page.')).toBeInTheDocument()
})

test('test CreatePost component', () => {
  const { getByText } = render(<CreatePost />);
  expect(getByText('Insert Title')).toBeInTheDocument()
  expect(getByText('Category')).toBeInTheDocument()
})

test('test routes in App.js', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()

  expect(screen.getByText(/Home/i)).toBeInTheDocument()

  await user.click(screen.getByText(/about/i))
  expect(screen.getByText(/About/i)).toBeInTheDocument()

  await user.click(screen.getByText(/login/i))
  expect(screen.getByText(/Login/i)).toBeInTheDocument()

  await user.click(screen.getByText(/register/i))
  expect(screen.getByText(/Register/i)).toBeInTheDocument()

  await user.click(screen.getByText(/CreatePost/i))
  expect(screen.getByText(/Create Post/i)).toBeInTheDocument()
})
