import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  console.log(id);
  return <p>{id}제품상세페이지 입니다.</p>;
}
export default ProductPage;
