import "@testing-library/react-native/extend-expect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cleanup, render as rtlRender } from "@testing-library/react-native";
import { ReactElement } from "react";
import { View } from "react-native";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(cleanup);

type RTLRenderOptions = NonNullable<Parameters<typeof rtlRender>[1]>;
type RenderOptions = Omit<RTLRenderOptions, "queries">;
type WrapperProps = { children?: ReactElement };

export const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const { ...returnOptions } = options;

  // Wrapper component of the render function
  const Wrapper: React.FC<WrapperProps> = props => {
    const { children } = props;
    const queryClient = new QueryClient();

    return (
      <QueryClientProvider client={queryClient}>
        <View>{children}</View>
      </QueryClientProvider>
    );
  };
  // Return renderer function with base options set
  return {
    ...rtlRender(ui, { wrapper: Wrapper, ...returnOptions })
  };
};
