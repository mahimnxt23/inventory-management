/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Table } from "antd";
import React, { useState } from "react";

const Datatable = ({ props, columns, dataSource }) => {
	const [selectedRowKeys, setSelectedRowKeys] = useState([]);
	const onSelectChange = (newSelectedRowKeys) => {
		setSelectedRowKeys(newSelectedRowKeys);
	};

	const rowSelection = {
		selectedRowKeys,
		onChange: onSelectChange,
	};
	return (
		<Table
			key={props}
			className="table datanew dataTable no-footer"
			rowSelection={rowSelection}
			columns={columns}
			dataSource={dataSource}
			rowKey={(record) => record.id}
		/>
	);
};

export default Datatable;
