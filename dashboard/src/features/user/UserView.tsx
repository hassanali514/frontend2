import { columns } from '../../data';
import { Button, Input, Space, Table } from "antd";
import moment from 'moment';
import { Spin } from 'antd';
import { useGetCandidateQuery, useDeleteCandidateMutation } from "../api/apiSlice"
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'antd/es/button/button-group';
import { BsSearch } from 'react-icons/bs'
import { filterArr } from '../../utils/filterArray';

export const UserView = () => {

  const [deleteCandidate] = useDeleteCandidateMutation();

  const navigate = useNavigate();

  // const { data: res = [], error, isLoading } = useGetCandidateQuery(undefined, { refetchOnMountOrArgChange: true })
  const { data: res = [], error, isLoading } = useGetCandidateQuery(undefined);

  console.log(res, "res");
  // const arr = res.map(o => o.name);
  // const arr: any = [];
  // res.forEach((value: any, ind: number, res) => {
  //   arr.push({
  //     text: value.name,
  //     value: value.name
  //   })
  // })
  // console.log(arr, "array");

  const deleteCandidates = (id: String) => {
    // console.log(id,"id")
    deleteCandidate({ id })
    navigate
  }


  const result = isLoading ? [] : res.length > 0 ? res.map((item) => ({
    id: item._id,
    name: item.name,
    fn: item.fatherName,
    ppno: item.passportNo,
    dob: moment(item.dateOfBirth).format("DD-MM-YYYY"),
    ppexp: moment(item.passportExpiryDate).format("DD-MM-YYYY"),
    national: item.nationality,
    trd: item.trade,
    co: item.careOf,
    sts: item.status,
  })) : [];

  if (isLoading) {
    return <div className="example"><Spin tip="Loading..." size="large" /></div>
  }

  return (
    <>
      <Button onClick={() => navigate("/candidate/create_candidate")}>+Add</Button>
      <Table

        columns={[
          {
            title: "Name",
            dataIndex: "name",
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
              return (
                <>
                  <Input
                    allowClear={true}
                    placeholder='search'
                    value={selectedKeys[0]}
                    onChange={(e) => {
                      setSelectedKeys(e.target.value ? [e.target.value] : [])
                      confirm({ closeDropdown: false })
                    }}
                    onPressEnter={() => {
                      confirm()
                    }}
                    onBlur={() => {
                      confirm()
                    }}
                  />
                </>
              )
            },
            filterIcon: () => {
              return <BsSearch />
            },
            onFilter: (value, record) => {
              return record.name.toLowerCase().includes(value.toLowerCase())
            },
            width: 110,
          },
          {
            title: "Father Name",
            dataIndex: "fn",
            // filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
            //   return (
            //     <>
            //       <Input
            //         allowClear={true}
            //         placeholder='search'
            //         value={selectedKeys[0]}
            //         onChange={(e) => {
            //           setSelectedKeys(e.target.value ? [e.target.value] : [])
            //           confirm({ closeDropdown: false })
            //         }}
            //         onPressEnter={() => {
            //           confirm()
            //         }}
            //         onBlur={() => {
            //           confirm()
            //         }}
            //       />
            //     </>
            //   )
            // },
            // filterIcon: () => {
            //   return <BsSearch />
            // },
            // onFilter: (value, record) => {
            //   return record.fn.toLowerCase().includes(value.toLowerCase())
            // },
            width: 110
          },
          {
            title: "PP No#",
            dataIndex: "ppno",
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
              return (
                <>
                  <Input
                    allowClear={true}
                    placeholder='search'
                    value={selectedKeys[0]}
                    onChange={(e) => {
                      setSelectedKeys(e.target.value ? [e.target.value] : [])
                      confirm({ closeDropdown: false })
                    }}
                    onPressEnter={() => {
                      confirm()
                    }}
                    onBlur={() => {
                      confirm()
                    }}
                  />
                </>
              )
            },
            filterIcon: () => {
              return <BsSearch />
            },
            onFilter: (value, record) => {
              return record.ppno.toLowerCase().includes(value.toLowerCase())
            },
            width: 110
          },
          {
            title: "DOB",
            dataIndex: "dob",
            width: 110
          },
          {
            title: "PP Exp. Date",
            dataIndex: "ppexp",
            width: 110
          },
          {
            title: "Nationality",
            dataIndex: "national",
            filters: filterArr(res,'nationality'),
            onFilter: (value: string, record) => record.national.indexOf(value) === 0,
            width: 110
          },
          {
            title: "Trade",
            dataIndex: "trd",
            filters: filterArr(res,'trade'),
            onFilter: (value: string, record) => record.trd.indexOf(value) === 0,
            width: 110
          },
          {
            title: "Care Of",
            dataIndex: "co",
            filters: filterArr(res,'careOf'),
            onFilter: (value: string, record) => record.co.indexOf(value) === 0,
            width: 110
          },
          {
            title: "Status",
            dataIndex: "sts",
            filters: filterArr(res,'status'),
            onFilter: (value: string, record) => record.sts.indexOf(value) === 0,
            width: 110
          },
          {
            title: "Actions",
            key: 'action',
            width: 110,
            render: (record) => {
              return <>
                <ButtonGroup>
                  <Space>
                    <Button>Edit</Button>
                    <Button type='primary' danger onClick={() => deleteCandidates(record.id)}>Delete</Button>
                  </Space>
                </ButtonGroup>
              </>
            }
          },
        ]}
        dataSource={result.reverse()}
        pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5', '10', '15'] }}
        scroll={{ y: 400 }}
      />
    </>
  )
}
