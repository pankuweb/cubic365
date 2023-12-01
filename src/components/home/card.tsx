import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './style';

interface CardProps {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  backgroundColor?: string; // Define a background color prop
  style?: ViewStyle; // Additional styles if needed
}

function Card(props: CardProps): JSX.Element {
  const {backgroundColor, style} = props;

  return (
    <View style={[styles.card, {backgroundColor}, style]}>
      {props.children}
    </View>
  );
}

export default Card;
