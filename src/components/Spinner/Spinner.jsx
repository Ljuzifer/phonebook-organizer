import LoadingSpinnerComponent from 'react-spinners-components';

export default function Spinner() {
  return (
    <div className="container mx-auto flex max-h-screen w-full items-center justify-center p-10">
      <LoadingSpinnerComponent
        type={'Gear'}
        color={'midnightblue'}
        size={'220px'}
      />
    </div>
  );
}
