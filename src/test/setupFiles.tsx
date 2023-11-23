jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

jest.mock("react-native", () => {
  const RN = jest.requireActual("react-native");
  RN.NativeModules.IndigitallReactNative = {
    init: jest.fn()
  };
  return RN;
});

jest.mock("expo-linking", () => ({
  createURL: jest.fn(),
  getInitialURL: () => ({
    then: jest.fn()
  }),
  addEventListener: jest.fn()
}));

jest.mock("react-hook-form", () => ({
  useFormContext: () => ({
    formState: {
      errors: {}
    },
    register: jest.fn,
    watch: jest.fn,
    handleSubmit: jest.fn
  }),
  useController: () => ({
    field: {
      onChange: jest.fn,
      onBlur: jest.fn,
      value: jest.fn()
    }
  }),
  useForm: () => ({
    handleSubmit: jest.fn,
    watch: jest.fn,
    register: jest.fn,
    getValues: jest.fn,
    formState: {
      errors: {},
      isSubmitting: false
    }
  }),
  useFormState: () => ({
    errors: {}
  }),
  useWatch: () => undefined,
  FormProvider: jest.fn
}));

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
