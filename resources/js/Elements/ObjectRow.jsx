import React from "react";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-lg text-black whitespace-nowrap dark:text-black"
                >
                    {this.props.name}
                </th>
                <td className="px-6 py-4 border-l-2 border-gray-900 text-2xl">
                    {this.props.nu}
                </td>
                <td className="px-6 py-4 border-l border-gray-900 text-2xl">
                    {this.props.straks}
                </td><td className="px-6 py-4 border-l border-gray-900 text-2xl">
                {this.props.later}
            </td>
            </tr>
        )
    }
}
