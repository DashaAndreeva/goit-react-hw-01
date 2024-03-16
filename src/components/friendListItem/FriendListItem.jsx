// import clsx from "clsx";

// export default function FriendListItem({ avatar, name, isOnline }) {
//   return (
//     <div>
//       <img src={avatar} alt="Avatar" width="48" />
//       <p>{name}</p>
//       <p className={clsx("online", "offline")}>
//         {isOnline ? "Online" : "Offline"}
//       </p>
//     </div>
//   );
// }

import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css["friend-item-container"]}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={css["friend-item-img"]}
      />
      <p className={css["friend-item-name"]}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
