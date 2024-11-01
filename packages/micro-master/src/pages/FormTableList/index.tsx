import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Table,
  Typography,
} from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';

type noop = (this: any, ...arg: any[]) => any;
function useMemoFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn);
  fnRef.current = useMemo(() => fn, [fn]);

  const memoFn = useRef<T>();

  if (!memoFn.current) {
    memoFn.current = function (thisFn, ...arg) {
      return fnRef.current.apply(thisFn, arg);
    };
  }
  return memoFn.current as T;
}

const FormTableList: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="dynamic_form_complex"
      autoComplete="off"
      initialValues={{
        tableList: [
          {
            name: '小明',
            age: 12,
          },
        ],
      }}
    >
      <Row gutter={[24, 0]}>
        <Col span={12}>
          <Form.List name="tableList">
            {(fields, { add, remove }) => (
              <Table
                dataSource={fields}
                columns={[
                  {
                    dataIndex: 'index',
                    title: '序号',
                    width: 70,
                    render(_, __, index) {
                      return index + 1;
                    },
                  },
                  {
                    dataIndex: 'name',
                    title: '姓名',
                    width: 90,
                    render(_, field) {
                      return (
                        <Form.Item
                          style={{ marginBottom: 0, width: '100%' }}
                          name={[field.name, 'name']}
                        >
                          <Input style={{ width: '100%' }} />
                        </Form.Item>
                      );
                    },
                  },
                  {
                    dataIndex: 'age',
                    title: '年龄',
                    width: 210,

                    render(_, field) {
                      console.log(field, 'ddd');

                      return (
                        <Form.Item
                          style={{ marginBottom: 0 }}
                          name={[field.name, 'age']}
                          rules={[
                            {
                              required: true,
                              message: '请输入年龄',
                            },
                          ]}
                        >
                          <InputNumber style={{ width: 200 }} />
                        </Form.Item>
                      );
                    },
                  },
                  {
                    dataIndex: 'age1',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age22',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age2',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age3',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age4',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age5',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age6',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age7',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age8',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age9',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age10',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age11',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'age12',
                    title: '年龄',
                    width: 90,
                  },
                  {
                    dataIndex: 'operate',
                    title: '操作',
                    fixed: 'right',
                    width: 180,

                    render(_, field) {
                      return (
                        <Space>
                          <Button
                            onClick={() => {
                              add({});
                            }}
                          >
                            +
                          </Button>
                          <Button
                            onClick={() => {
                              remove(field.name);
                            }}
                          >
                            -
                          </Button>
                          <Button
                            onClick={() => {
                              form.validateFields().then((res) => {
                                console.log(res);
                              });
                              console.log(form.getFieldsError());
                              console.log(form.getFieldsValue());
                            }}
                          >
                            form
                          </Button>
                        </Space>
                      );
                    },
                  },
                ]}
                virtual
                scroll={{
                  y: 500,
                }}
                pagination={false}
              />
            )}
          </Form.List>
        </Col>
        <Col span={12}>
          <Form.Item noStyle shouldUpdate>
            {() => (
              <Typography>
                <pre
                  style={{
                    height: 540,
                    overflow: 'auto',
                  }}
                >
                  {JSON.stringify(form.getFieldsValue(), null, 2)}
                </pre>
              </Typography>
            )}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormTableList;
