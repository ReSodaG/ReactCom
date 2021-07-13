import React from 'react';
import { Tree, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './EditTree.css';

const { TreeNode } = Tree;//es6解构赋值 const TreeNode = Tree.TreeNode

class EditTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleCache: '',
      isEditNodeKey: false
    };
  }
  changeInput(title, key) {
    this.setState({ titleCache: title });
  }
  changeNode(tree, key) {
    tree.forEach((node) => {
      if (key === node.key)
        node.title = this.state.titleCache
      else
        if (node.children)
          this.changeNode(node.children, key)
    })
    this.setState({ isEditNodeKey: false })
  }
  // 建立结点树
  createTreeData(data) {
    let treeArr = data.map((node) => {
      let title;
      if (node.key === this.state.isEditNodeKey) {
        title =
          <span >
            <Input value={this.state.titleCache}
              onChange={(e) => this.changeInput(e.target.value, node.key)}
              onPressEnter={() => this.changeNode(this.props.rowtreeData, node.key)}
              onBlur={() => this.changeNode(this.props.rowtreeData, node.key)}
            />
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
        {this.createTreeData(this.props.rowtreeData)}
      </Tree>
    );
  }
};

export default EditTree;