module.exports = {
  ROLE: {
    ADMIN: "admin",
    RECRUITER: "recruiter",
    USER: "user",
  },

  statusCode: {
    OK: 200,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
    UNAUTHORIZED: 401,
    MULTIPLE_CHOICES: 300,
    FORBIDDEN: 403,
  },

  apiMessage: {
    SUCCESS: "Thành công",
    SERVER_ERROR: "Lỗi từ Server",
    DB_ERROR: "Truy vấn lỗi",
    DATA_MISSING: "Vui lòng cung cấp thêm dữ liệu hợp lệ",
    ACCOUNT_EXIST: "Email đã được sử dụng",
    LOGIN_FAILED: "Tài khoản hoặc mật khẩu không chính xác",
    NOT_FOUND: "Dữ liệu không hợp lệ",
    UNAUTHORIZED: "Không được phép truy cập",
    DATA_EXIST: "Dữ liệu đã tồn tại",
    DATA_FOUND: "Không tìm thấy dữ liệu",
    EXPIRED_DATE:
      "Bạn đã hết thời gian sử dụng ứng dụng, vui lòng liên hệ với chúng tôi để gia hạn!",
    FORBIDDEN: "Không thể truy cập!",
  },
};
