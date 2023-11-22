import dayjs from "dayjs";
import { View, Text } from "react-native";

import styles from "./ProductDetail.styles";
import { ProductDetailProps as Props } from "./ProductDetail.types";
import Image from "components/global/Image/Image";

const ProductDetail: React.FC<Props> = props => {
  const { product } = props;
  const { id, name, description, logo } = product ?? {};
  const { date_release, date_revision } = product ?? {};

  return (
    <View style={styles.container}>
      <Text style={styles.id}>{`ID: ${id}`}</Text>
      <Text style={styles.extra}>Información extra</Text>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Descripción</Text>
          <Text style={styles.value}>{description}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Logo</Text>
          <Image uri={logo} />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Fecha de liberación</Text>
          <Text style={styles.value}>
            {dayjs(date_release).format("DD/MM/YYYY")}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Fecha de revisión</Text>
          <Text style={styles.value}>
            {dayjs(date_revision).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </View>
  );
};

ProductDetail.defaultProps = {};

export default ProductDetail;
