- `xxl`: Màn hình có độ rộng lớn hơn 1600px.
- `xl`: Màn hình có độ rộng từ 1200px đến 1600px.
- `lg`: Màn hình có độ rộng từ 1000px đến 1200px.
- `md`: Màn hình có độ rộng từ 765px đến 1000px.
- `sm`: Màn hình có độ rộng nhỏ hơn 765px.

Dưới đây là tóm tắt danh sách các thẻ và components trong Ant Design sử dụng được các thuộc tính `xxl`, `xl`, `lg`, `md`, và `sm`:

1. **Grid System (`<Row>` và `<Col>`):**

   - `<Col>`: Sử dụng `xxl`, `xl`, `lg`, `md`, và `sm` trong thuộc tính `span` để xác định số cột chiếm trên các loại màn hình khác nhau.

2. **Layout (`<Layout>`):**

   - `<Header>`, `<Content>`, `<Footer>`, và `<Sider>`: Các components trong `<Layout>` có thể sử dụng `xxl`, `xl`, `lg`, `md`, và `sm` để xác định kích thước trên các loại màn hình.

3. **Form (`<Form.Item>`):**
   - `<Form.Item>`: Có thể sử dụng `xxl`, `xl`, `lg`, `md`, và `sm` để xác định chiều rộng của label và input trên các loại màn hình.

Lưu ý rằng trong nhiều trường hợp, các thuộc tính này có thể được sử dụng để xác định chiều rộng hoặc số cột tùy thuộc vào ngữ cảnh sử dụng của từng component. Hãy kiểm tra tài liệu chính thức của Ant Design để biết chi tiết và sử dụng chính xác trong dự án của bạn.

Thuộc tính `span` thường được sử dụng chủ yếu trong thẻ `<Col>` của hệ thống lưới (`<Row>` và `<Col>`) trong Ant Design. Dưới đây là danh sách các thẻ và components mà bạn thường sử dụng thuộc tính `span`:

1. **Grid System (`<Row>` và `<Col>`):**

   - `<Col>`: Thuộc tính `span` được sử dụng để xác định số cột mà một `<Col>` sẽ chiếm trong một hàng `<Row>`.

   ```jsx
   import { Row, Col } from "antd";

   const MyComponent = () => {
     return (
       <Row>
         <Col span={6}>{/* Nội dung chiếm 6/24 cột (1/4) của một hàng */}</Col>
         <Col span={12}>
           {/* Nội dung chiếm 12/24 cột (1/2) của một hàng */}
         </Col>
         <Col span={6}>{/* Nội dung chiếm 6/24 cột (1/4) của một hàng */}</Col>
       </Row>
     );
   };
   ```

Như đã đề cập trước đó, các components khác trong Ant Design thường không sử dụng trực tiếp thuộc tính `span`. Thay vào đó, chúng có thể sử dụng các thuộc tính khác phù hợp với mục đích sử dụng của chúng, như `style`, `className`, hoặc các thuộc tính liên quan đến layout và kiểu dáng.
