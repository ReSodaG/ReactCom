import React from 'react';
import { Tree } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './EditTree.css';

const { TreeNode } = Tree;//es6解构赋值 const TreeNode = Tree.TreeNode
let treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

class EditTree extends React.Component {
  constructor() {
    super();
  }
  createTreeData(treeData) {
    let treeArr = treeData.map((node) => {
      let title = <span>{node.title}<EditOutlined className="editIcon" /></span>
        ;
      if (node.children) {
        return <TreeNode title={title} key={node.key}>{this.createTreeData(node.children)}</TreeNode>
      }
      return <TreeNode title={title} key={node.key} />
    })
    return treeArr;
  };
  onSelect(selectedKeys, info) {
    console.log('selected', selectedKeys, info);
  };

  onCheck(checkedKeys, info) {
    console.log('onCheck', checkedKeys, info);
  };

  render() {
    return (
      <Tree
        defaultExpandAll={true}>
        {this.createTreeData(treeData)}
      </Tree>
    );
  }
};

export default EditTree;