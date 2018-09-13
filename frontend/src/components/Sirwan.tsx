import * as React from "react";

// class Sirwan extends React.Component<{ location: string }, { name: string }> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       name: "Sirwan"
//     };
//   }
//   public render() {
//     return (
//       <div>
//         <div onClick={this.onClick}>{this.state.name}</div>
//         <div>{this.props.location}</div>
//       </div>
//     );
//   }
//   private onClick = () => {
//     this.setState({
//       name: "Florian"
//     });
//   };
// }

interface Props {
  name: string;
  onClik(): void;
}
const Sirwan = ({ name, onClik }: Props) => <div onClick={onClik}>{name}</div>;

export { Sirwan };
