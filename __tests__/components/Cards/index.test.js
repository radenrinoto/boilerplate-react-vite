import { render, screen, fireEvent } from '@utils/testHelper';
import Cards from '@components/Cards';

let wrapper;

let isOpen = false;

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}))

const mockProps = {
  title: 'Course',
  description: 'Dummy description',
  courseInstructor: {
    fullName: 'John Doe'
  },
  max_participants: 2,
  is_close: false
}

const mockId = 2;

const mockOnClick = () => {
  isOpen = true
}

beforeEach(() => {
  wrapper = render(<Cards course={mockProps} id={mockId} onClick={mockOnClick} />);
});

describe('Cards Test', () => {
  test('should render correctly', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('cards-container')).toBeInTheDocument();
    expect(getByTestId('card-description')).toBeInTheDocument();
  })
  test('Should render text correctly', () => {
    expect(screen.getByText(`Max Participant ${mockProps.max_participants}`)).toBeInTheDocument();
  })
  test('Should call onClick when button clicked', () => {
    const { getByTestId } = wrapper;
    const button = getByTestId('button-submit');
    fireEvent.click(button);
    expect(isOpen).toBe(true);
  })
  test('Should call onClick when button clicked', () => {
    const { getByTestId } = wrapper;
    const button = getByTestId('button-mui');
    fireEvent.click(button);
    expect(isOpen).toBe(true);
  })
  test('Shoul call navigate', () => {
    const { getByTestId } = wrapper;
    const button = getByTestId("navigate-button");
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith(`/courses/${mockId}`);
  })
  test('Should match with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})