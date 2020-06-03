const urls = [
  "https://northeastern.zoom.us/rec/share/uutZf7ja92xJc5XS5n7hAKMfF4jXX6a80HMd8_EMmEYms2bBu_wIBv043eecEwFl",
  "https://northeastern.zoom.us/rec/share/3p1LF6yzzHhOW8_j-VmGQ4kRH770eaa8gyRN_qAMmkexda4GasobRXJc8O6aH7lc",
  "https://northeastern.zoom.us/rec/share/_8AuEbz5zl1OE5XL0UXjVvQmIobXeaa81HAY8_EPnsbVpSyTYPKGfroyD6I6U90",
  "https://northeastern.zoom.us/rec/share/4td_E5vuyE9ISaPnuQbUAoR4B9W6X6a8gXVIr_JZykc-8g46sYiQvjm0j2KElj01",

  "https://northeastern.zoom.us/rec/share/vvJ7CZfT0EFJTtbw2XnncYQKBK_PT6a813AW-fcEyR4Ol1OieON7PiGrYXgOjB8Z",
  "https://northeastern.zoom.us/rec/share/6s8lF4uvx1NIW4mU2WT-dZwkJNn3T6a82yUf_vMLykjgyU-V-h7D1ExAoSthCP33",
  "https://northeastern.zoom.us/rec/share/veFbNODd0H5JEqeQxlvRSL4CBIW4T6a81CIY_qJeyBxGHPqOrptLnIlIYk86-bhq",
  "https://northeastern.zoom.us/rec/share/v8J6bL_q1SBIbrPN61GEfZE5Etq5T6a80HIfr_BYz0cuUqSrsIAeIU3aFaVcsrmI",

  "https://northeastern.zoom.us/rec/share/_d5OEbTN9XhLfa_R11mCXo0_H5zPX6a8hCMe_KZcy0zm-YKMTqO-_H_vMA_7S8Bs",
  "https://northeastern.zoom.us/rec/share/ysAlMqvArjxOfqfq4kbNarVwANXfaaa81nAW8_VYxUm4qXBQGVlwXMTAhHaYPrZ3",
  "https://northeastern.zoom.us/rec/share/2cUkFJburG9JYNLVsU32V5N-RKbLT6a8hCgY_fIIyka-w4OBUOKtRUmQW7wcORCa",
  "https://northeastern.zoom.us/rec/share/wu1bdZbo6GpIedaWr0vNdqQaE4b_aaa8hCJIrKUFzB28X1PwMC2flseBT5gW80M-",

  null,
  "https://northeastern.zoom.us/rec/share/u9ZMC7LO0UlIbbeOyFGBSJNiFY38eaa8hyEZqfUImRslXPk_2A13FsXlR_HubnsT",
  "https://northeastern.zoom.us/rec/share/vtFZMe3MzGVOTYnhyBvGVfF5Ad_rX6a81CAdrvUKzhm_DVxl37_wOJGqMmCQ108d",
  null,

  "https://northeastern.zoom.us/rec/share/uZdeMIra_2pLE6uKyXvdcKICIq_1T6a8gHIerPIMn0kQRriL6ouwBMWw677UsvP8",
  "https://northeastern.zoom.us/rec/share/zvEtDqvg0XxJT53182D7X-1mFa3maaa8gyMY-_pZzUwnFk5kOcrBbVDAQwSM44tJ",
  "",
  ""
]
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday"]
let startDate = new Date()
startDate.setMonth(4)
startDate.setDate(4)
startDate.setFullYear(2020)

class ZoomMeetings extends React.Component {
  render() {
    return(
      <div>
        {
          urls.filter((url, index) => index % 4 === 0).map((url0, index0) =>
            <div key={url0} className="list-group">
              <a href="#" className="list-group-item list-group-item-primary">
                Week {index0 + 1} -
                {/*{(new Date(startDate.setDate(startDate.getDate() + index0 * 4))).toDateString()} - {(new Date(startDate.setDate(startDate.getDate() + 3))).toDateString()}*/}
              </a>
              {
                urls.slice(index0 * 4, (index0 * 4) + 4).map((url2, index2) => {
                  return (
                    <a key={url2}
                       href={url2}
                       target="_blank"
                       className="list-group-item list-group-item-action">
                      {weekDays[index2 % 4]} -
                    </a>
                  )
                })
              }
            </div>
          )
        }
      </div>
    )
  }
}

ReactDOM.render(<ZoomMeetings/>, document.getElementById("zoom-meetings"))
