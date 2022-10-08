"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("JobCategories", [
      {
        name: "An Ninh / Bảo Vệ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "An toàn, vệ sinh lao động",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "An toàn lao động",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bán hàng / Kinh doanh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bán lẻ / Bán sỉ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bảo hiểm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bất động sản",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Biên phiên dịch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bưu chính viễn thông",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chăn nuôi / Thú y",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chứng khoán",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CNTT - Phần cứng / Mạng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CNTT - Phần mềm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Công nghệ sinh học",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Công nghệ thực phẩm / Dinh dưỡng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cơ khí / Ô tô / Tự động hóa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dầu khí",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dệt may / Da giày / Thời trang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dịch vụ khách hàng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Du lịch",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dược phẩm",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Điện / Điện tử / Điện lạnh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Đồ gỗ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Giải trí",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Giáo dục / Đào tạo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hàng gia dụng / Chăm sóc cá nhân",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hàng hải",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hàng không",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hành chính / Thư ký",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hóa học",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "In ấn / Xuất bản",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kế toán / Kiểm toán",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Khoáng sản",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kiến trúc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lao động phổ thông",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lâm Nghiệp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Luật / Pháp lý",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Môi trường",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mới tốt nghiệp / Thực tập",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mỹ thuật / Nghệ thuật / Thiết kế",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ngân hàng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nhà hàng / Khách sạn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nhân sự",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nội ngoại thất",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nông nghiệp",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Phi chính phủ / Phi lợi nhuận",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quản lý chất lượng (QA/QC)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quản lý điều hành",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Quảng cáo / Đối ngoại / Truyền Thông",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sản xuất / Vận hành sản xuất",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tài chính / Đầu tư",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thống kê",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thu mua / Vật tư",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thủy lợi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thủy sản / Hải sản",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thư viện",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thực phẩm & Đồ uống",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tiếp thị / Marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tiếp thị trực tuyến",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tổ chức sự kiện",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Trắc địa / Địa Chất",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Truyền hình / Báo chí / Biên tập",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tư vấn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vận chuyển / Giao nhận / Kho vận",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Xây dựng",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Xuất nhập khẩu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Y tế / Chăm sóc sức khỏe",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bảo trì / Sửa chữa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ngành khác",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("JobCategories", null, {});
  },
};
