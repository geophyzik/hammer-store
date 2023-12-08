import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, Button } from 'antd';
import { connect } from 'react-redux';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
// import { UserOutlined} from '@ant-design/icons';

export class UserList extends Component {
	render() {
		const { users, userProfileVisible, selectedUser } = this.props;
		// console.log(users[0]);
		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => a.name.localeCompare(b.name),
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: company => (
					<span>{company['name']}</span>
				),
				sorter: {
					compare: (a, b) => a.company.name.localeCompare(b.company.name),
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}
const addStateProps = (state) => {
    return {
        users: state.clients.users,
        userProfileVisible: false,
        selectedUser: null
    };
};

export default connect(addStateProps)(UserList);

