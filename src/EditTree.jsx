import React from 'react';
import { Tree, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './EditTree.css';

const { TreeNode } = Tree;//es6解构赋值 const TreeNode = Tree.TreeNode
let rowtreeData = [
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
      titleCache: '',
      isEditNodeKey: false,
      rowtreeData: rowtreeData,
    };
  }
  changeNode(title, key) {
    this.setState({ titleCache: title });
    console.log(title, key)
  }
  // 建立结点树
  createTreeData(data) {
    let treeArr = data.map((node) => {
      let title;
      if (node.key === this.state.isEditNodeKey) {
        title =
          <span >
            <Input value={this.state.titleCache} onChange={(e) => this.changeNode(e.target.value, node.key)} />
          </span>;
      }
      else
        title =
          <span>
            {node.title}
            <EditOutlined className="editIcon" onClick={() => this.setState({ isEditNodeKey: node.key, titleCache: node.title })} />
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
        {this.createTreeData(this.state.rowtreeData)}
      </Tree>
    );
  }
};

export default EditTree;