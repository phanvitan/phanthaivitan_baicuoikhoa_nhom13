//HOF : HIGH ORDER FUNCTION la ham dong vai tro la tham so truyen vao ham khac

function main(callback)
{
    const result = callback('Cybersoft', 'Hello bc dn 1');
    return function (id){
        document.getElementById(id).innerHTML = result;

    }
}

function renderContent(title, content) {
    const divTitle = `<h1>${title}</h1>`;
    const divContent = `<div class="bg-dark text-white">${content}</div>`
    const result = divTitle + divContent;
    return result;
}

function renderCardContent(title,content) {
    const result = `
    <div class="card bg-dark text-white">
    <div class="card-title">${title}</div>
    <div class="card-body">${content}</div>
    </div>
    `
    return result;
}

// main(renderCardContent)

// main(renderContent)('content');
// connect(mapStateToProps)(Component)
const hof = main(renderContent);
hof('content');


/***
   * 
   * 
   
 const userProfile = useSelector(
    (state) => state.QuanLyNguoiDungReducer.thongTinNguoiDung
  );
  const { values, handleChange, handleSubmit } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: SET_THONG_TIN_NGUOI_DUNG
    });
  }, []);

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <div className="grid grid-cols-5 py-24 mr-4">
        <div className="col-span-1  h-full p-3 bg-coolGray-50 text-coolGray-800">
          <div className="space-y-3">
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm font-bold shadow-sm bg-pink-100">
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md font-weight-bold"
                  >
                    <span>Thông tin cá nhân</span>
                  </a>
                </li>
                <li className="rounded-sm font-bold">
                  <NavLink
                    to="/profile"
                    className="flex items-center p-2 space-x-3 rounded-md font-weight-bold"
                  >
                    <span>Lịch sử đặt vé</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <form className="w-full px-3 mr-5 border mt-6" onSubmit={handleSubmit}>
            <thead>
              <tr className="border-b bg-pink-100">
                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-blue-800">
                  <div className="flex items-center justify-center">STT</div>
                </th>
                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-blue-800">
                  <div className="flex items-center justify-center">
                    Nội Dung
                  </div>
                </th>
                <th className="p-2 border-r cursor-pointer text-sm font-semibold text-blue-800">
                  <div className="flex items-center justify-center">
                    Chỉnh sửa
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-2 border-r">Tên tài khoản</td>
                <td>
                  <input
                    value={values.taiKhoan}
                    className="form-control w-full bg-gray-100 text-center px-8 font-extrabold"
                    name="taiKhoan"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-2 border-r">Họ tên</td>
                <td>
                  <input
                    value={values.hoTen}
                    className="form-control w-full bg-gray-100 text-center px-8 font-extrabold"
                    name="hoTen"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-2 border-r">Email</td>
                <td>
                  <input
                    value={values.email}
                    className="form-control w-full bg-gray-100 text-center px-8 font-extrabold"
                    name="email"
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr className="bg-gray-100 text-center border-b text-sm text-gray-600">
                <td className="p-2 border-r">Số điện thoại</td>
                <td>
                  <input
                    value={values.soDT}
                    className="form-control w-full bg-gray-100 text-center px-8 font-extrabold"
                    name="soDt"
                    onChange={handleChange}
                  />
                </td>

                {/* <td className="p-2 border-r"></td> */}

//                 <td>
//                   <a
//                     href="#"
//                     className="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin border-red-300"
//                     onClick={() => {
//                       const action = {
//                         type: OPEN_FORM_EDIT_USER,
//                         Component: <FormEditUser />,
//                       };
//                       dispatch(action);
//                       const actionEditUser = {
//                         type: EDIT_USER,
//                         // userEditModel: userLogin,
//                       };
//                       dispatch(actionEditUser);
//                     }}
//                   >
//                     Edit
//                   </a>
//                 </td>
//               </tr>
//             </tbody>
//           </form>
//         </div>
//       </div>
//     </form>
//   );
// }

// const EditUserFormMain = withFormik({
//   enableReinitialize: true,
//   mapPropsToValues: (props) => {
//     const { userEdit } = props;
//     return {
//       taiKhoan: userEdit.taiKhoan,
//       matKhau:userEdit.matKhau,
//       soDT: userEdit.soDT,
//       hoTen: userEdit.hoTen,
//       email: userEdit.email,
//       maNhom:userEdit.maNhom,
//       maLoaiNguoiDung: userEdit.maLoaiNguoiDung
//     };
//   },
//   validationSchema: Yup.object().shape({}),
//   handleSubmit: (values, { props, setSubmitting }) => {
//     console.log("values", values);
//     // props.dispatch({
//     //   type: UPDATE_USER,
//     //   valuesUpdate: values,
//     // });
//     props.dispatch(updateUserAction(values));
//   },
//   displayName: "EditUserFormMain",
// })(InfoClient);

// const mapStateToProps = (state) => ({
//   // userProfile: state.EditUserReducer.userProfile
//   userEdit: state.EditUserReducer.userEdit,
// });
// export default connect(mapStateToProps)(EditUserFormMain);


   


 


