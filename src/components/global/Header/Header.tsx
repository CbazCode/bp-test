import React from "react";
import { View, SafeAreaView } from "react-native";

import styles from "./Header.styles";
import { HeaderProps as Props } from "./Header.types";
import GoBack from "../GoBack/GoBack";

import LogoSVG from "assets/icons/logo.svg";

const Header: React.FC<Props> = props => {
  const { showGoBack } = props;

  return (
    <SafeAreaView style={styles.container}>
      {showGoBack ? <GoBack /> : null}
      <View style={styles.logo}>
        <LogoSVG width={180} height={50} />
      </View>
    </SafeAreaView>
  );
};

Header.defaultProps = {};

export default Header;
