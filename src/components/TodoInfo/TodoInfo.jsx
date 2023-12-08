// Add the required props
import cd from 'classnames';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <article className={cd('TodoInfo', {
      'TodoInfo--completed': completed,
    })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo todo={todo} />}
    </article>
  );
};
