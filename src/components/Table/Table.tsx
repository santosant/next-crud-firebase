import Customer from "../../core/Customer/Customer";
import { deleteIcon, editIcon } from "../Icons/Icon";

interface TableProps {
  customer: Customer[];
  selectedCustomer?: (customer: Customer) => void;
  deletedCustomer?: (customer: Customer) => void;
}

export default function Table(props) {
  const showActions = props.selectedCustomer || props.deletedCustomer;
  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className="text-center p-4">Ações</th> : false}
      </tr>
    );
  }

  function fetchData() {
    return props.customer?.map((customer, i) => {
      return (
        <tr
          key={customer.id}
          className={`
             ${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}
            `}
        >
          <td className="text-left p-3">{customer.id}</td>
          <td className="text-left p-3">{customer.name}</td>
          <td className="text-left p-3">{customer.age}</td>
          {showActions ? actions(customer) : false}
        </tr>
      );
    });
  }

  function actions(customer: Customer) {
    return (
      <td className="flex justify-center">
        {props.selectedCustomer ? (
          <button
            className={`
                flex justify-center items-center 
                text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
                `}
            onClick={() => props.selectedCustomer?.(customer)}
          >
            {editIcon}
          </button>
        ) : (
          false
        )}

        {props.deletedCustomer ? (
          <button
            className={`
          flex justify-center items-center 
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50

        `}
            onClick={() => props.deletedCustomer?.(customer)}
          >
            {deleteIcon}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }
  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
        bg-gradient-to-r from-fuchsia-400 to-purple-800
        text-gray-50
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{fetchData()}</tbody>
    </table>
  );
}
