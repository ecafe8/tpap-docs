.. module:: resizable


Resizable
===============================================

|  这是一个缩放组件.
|  支持八种方向缩放,可在上, 下, 左, 右以及左上, 左下, 右上, 右下进行拖动缩放, 配置简单, 非常方便用户调用.
|  拖放 handler 的样式需要调用者自己编写. 

.. hint::

    组件来源于 `这里 <http://docs.kissyui.com/docs/html/api/component/resizable/>`_


.. important::
    组件引入方式

    .. code-block:: php

        <cajamodules include="kissy/1.3.0/core,kissy/1.3.0/resizable" />


构造函数
-----------------------------------------------

  * :class:`Resizable`

参数配置
-----------------------------------------------

  * :data:`node`
  * :data:`minWidth`
  * :data:`minHeight`
  * :data:`maxWidth`
  * :data:`maxHeight`
  * :data:`handlers`
  * :data:`prefixCls`


实例方法
-----------------------------------------------

  * :meth:`on`
  * :meth:`destroy`

事件
-----------------------------------------------

  * :func:`resizeStart`
  * :func:`resize`
  * :func:`resizeEnd`


构造函数详情
-----------------------------------------------

.. class:: Resizable

    | **Resizable** (config)
    
    :param Object config: 配置项, 详细见下方 **"参数配置详情"** .

参数配置详情
-----------------------------------------------

.. data:: node

    {String|HTMLElement|KISSY.Node} - 将要进行缩放的节点

.. data:: minWidth

    {Number} - 默认为0, 表示拖动缩放的最小宽度.

.. data:: minHeight

    {Number} - 默认为0, 表示拖动缩放的最小高度.

.. data:: maxWidth

    {Number} - 默认为 Number.MAX_VALUE, 表示拖动缩放的最大宽度.

.. data:: maxHeight

    {Number} - 默认为 Number.MAX_VALUE, 表示拖动缩放的最大高度.

.. data:: handlers

    {Array<String>} - 默认为 [], 表示可拖动元素的哪些位置来进行缩放. 
    可取下列值: “b”,”t”,”r”,”l”,”tr”,”tl”,”br”,”bl”． 其中, t,b,l,r 分别表示 top,bottom,left,right, 加上组合共八种取值, 可在上, 下, 左, 右以及左上, 左下, 右上, 右下进行拖动.

.. data:: prefixCls

    {String} - 默认为 rs-, 避免ISV无法定义ks-前缀的样式, ISV可自定义class前缀.




方法详情
-----------------------------------------------


.. method:: on

    | **on** ()
    | 监听事件,例如on("resizeStart",fn)为监听开始缩放事件.
    | 更多事件请参考下面的"**事件详情**";

.. method:: destroy

    | **destroy** ()
    | 销毁该组件, 取消元素上的缩放功能.


事件详情
-----------------------------------------------

.. function:: resizeStart

    | **resizeStart**
    | 开始拖放后触发
    | 例如: r.on("resizeStart", function(){
        console.log('resize --  start');
      });

.. function:: resize

    | **resize**
    | 拖放中触发
    | 例如: r.on("resize", function(){
        console.log('resize --');
      });

.. function:: resizeEnd

    | **resizeEnd**
    | 结束拖放后触发
    | 例如: r.on("resizeEnd", function(){
        console.log('resize --  end');
      });





demo 代码样例
-----------------------------------------------


    **三个简单的demo例子**

    .. raw:: html

        <iframe width="100%" height="260"  class="iframe-demo" src="http://tpap-docs.taegrid.taobao.com/kissy/1.3.0/component/resizable.php"></iframe>

    **对应DEMO html/php的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/resizable/resizable.php
        :language: html

    **对应DEMO javascript的代码**

    .. literalinclude:: /raw/tpap/kissy/1.3.0/component/resizable/resizable.js
        :language: javascript



