import { useNavigate } from "react-router-dom";

/**

 * @returns {() => void} Function to navigate back.
 */
export function useMoveBack() {
  const navigate = useNavigate();

  const moveBack = () => {
    navigate(-1); // Navigate back by one step in the history
  };

  return moveBack;
}
