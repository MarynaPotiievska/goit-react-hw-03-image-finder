import { Triangle } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

const Loader = () => {
  return (
    <Spinner>
      <Triangle
        height="100"
        width="100"
        color="#3f51b5"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </Spinner>
  );
};

export default Loader;
