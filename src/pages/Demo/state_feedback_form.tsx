/**
 * 使用状态响应输入
 * 下面是一个使用React编写的反馈表单，请注意他是如何使用status这个状、
 * 态变量来决定启用或者禁用提交按钮
 */
import { useState } from 'react';

/**
 * 模拟接口请求
 * @param answer
 */
function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('猜的不错，但答案不对，再试试看吧！'));
      } else {
        resolve(answer);
      }
    }, 1500);
  });
}

function FeedbackForm() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  async function onhandleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function hanldeTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2>城市测验</h2>
      <p>哪个城市有把空气变成饮用水的广告牌</p>
      <form onSubmit={onhandleSubmit}>
        <textarea
          value={answer}
          onChange={hanldeTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />

        <button
          type="submit"
          disabled={answer.length === 0 || status === 'submitting'}
        >
          提交
        </button>

        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
}

export default FeedbackForm;
