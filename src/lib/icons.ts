/**
 * Ícones Lucide (lucide-static) resolvidos no build: zero JavaScript no cliente.
 * Marcas (WhatsApp, Instagram, Google) vêm do simple-icons.
 */
import {
  KeyRound,
  CopyPlus,
  Microchip,
  Smartphone,
  Wrench,
  LockKeyhole,
  Motorbike,
  Siren,
  PhoneCall,
  Phone,
  Route,
  MapPin,
  MessageCircle,
  DoorOpen,
  Radio,
  Store,
  Clock,
  Navigation,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Check,
  ShieldCheck,
  Car,
  CarFront,
  Play,
  Send,
  Images,
  Info,
  Expand,
  CircuitBoard,
} from 'lucide-static';
import { siWhatsapp, siInstagram, siGoogle } from 'simple-icons';

export const ICONS = {
  KeyRound,
  CopyPlus,
  Microchip,
  Smartphone,
  Wrench,
  LockKeyhole,
  Motorbike,
  Siren,
  PhoneCall,
  Phone,
  Route,
  MapPin,
  MessageCircle,
  DoorOpen,
  Radio,
  Store,
  Clock,
  Navigation,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
  Check,
  ShieldCheck,
  Car,
  CarFront,
  Play,
  Send,
  Images,
  Info,
  Expand,
  CircuitBoard,
} as const;

export type IconName = keyof typeof ICONS;

export const BRAND_ICONS = {
  whatsapp: siWhatsapp.path,
  instagram: siInstagram.path,
  google: siGoogle.path,
} as const;

export type BrandIconName = keyof typeof BRAND_ICONS;
