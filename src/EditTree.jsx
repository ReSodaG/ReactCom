import React from 'react';
import { Tree, Input } from 'antd';
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
  constructor(props) {
    super(props);
    this.state = {
      isEditNodeKey: false,
    };
  }

  // 建立结点树
  createTreeData(treeData) {
    let treeArr = treeData.map((node) => {
      let title;
      if (node.key === this.state.isEditNodeKey)
        title =
          <span >
            <Input placeholder={node.title} />
          </span>;
      else
        title =
          <span>
            {node.title}
            <EditOutlined className="editIcon" onClick={() => this.setState({ isEditNodeKey: node.key })} />
          </span>;
      if (node.children) {
        return <TreeNode className="treeNode" title={title} key={node.key}>{this.createTreeData(node.children)}</TreeNode>

      }
      return <TreeNode className="treeNode" title={title} key={node.key} />
    })
    return treeArr;
  };

  render() {
    return (
      <Tree defaultExpandAll={true}>
        {this.createTreeData(treeData)}
      </Tree>
    );
  }
};

export default EditTree;