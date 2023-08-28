import { Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <div>
      <p>
        <Spinner color="red.500" />
      </p>
    </div>
  );
};

export default Loading;
