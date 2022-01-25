import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <div
      className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via-green-100 to-blue-600
      text-white
    `}
    >
      <Layout title="Cadastro simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  );
}
