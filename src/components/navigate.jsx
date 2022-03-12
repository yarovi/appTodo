import { useNavigate} from 'react-router-dom'

export default function useNavigationCustom(url) {
    let n = useNavigate();
    return n.navigation(url);
}