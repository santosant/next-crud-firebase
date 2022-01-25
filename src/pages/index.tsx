import Layout from "../components/Layout/Layout";
import Table from "../components/Table/Table";
import Customer from "../core/Customer/Customer";

export default function Home() {
  const customer = [
    new Customer("Ana", 20, "1"),
    new Customer("Bellagio", 38, "2"),
    new Customer("Elton", 36, "3"),
    new Customer("Jeh", 24, "4"),
  ];

  function selectedCustomer(customer: Customer) {
    console.log(customer.name);
  }

  function deletedCustomer(customer: Customer) {
    console.log(`Excluindo... ${customer.name}`);
  }
  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-green-100 to-blue-600
      text-white
    `}
    >
      <Layout title="Cadastro simples">
        <Table
          customer={customer}
          selectedCustomer={selectedCustomer}
          deletedCustomer={deletedCustomer}
        />
      </Layout>
    </div>
  );
}
