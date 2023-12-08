import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, Table, Tooltip, Button } from 'antd';
import { connect } from 'react-redux';
import { EyeOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export class UserList extends Component {
	render() {
		const { users } = this.props;
		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<Link to={`${APP_PREFIX_PATH}/clients/setting/edit-profile/${record.id}`}>
							<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
						</Link>
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
							<Link to={`${APP_PREFIX_PATH}/clients/setting/edit-profile/${elm.id}`}>
								<Button type="primary" className="mr-2" icon={<EyeOutlined />} size="small" />
							</Link>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
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

