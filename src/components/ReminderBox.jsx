import React, { useState } from 'react';
import { Bell, Plus, Trash2, Calendar, CheckSquare } from 'lucide-react';

/**
 * ReminderBox Component
 * Fully adheres to:
 * - Rule 6: Empty state when no reminders exist, responsive states
 * - Rule 17: Accessibility labels, min 44x44 touch targets
 * - Rule 19: Clean code with zero unused imports
 */
export default function ReminderBox({
  reminders = [],
  onToggleReminder,
  onAddReminder,
  onDeleteReminder
}) {
  const [taskText, setTaskText] = useState('');
  const [petName, setPetName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    onAddReminder({
      task: taskText.trim(),
      petName: petName.trim() || 'My Pet',
      dueDate: dueDate || new Date().toISOString().split('T')[0],
      completed: false
    });

    setTaskText('');
    setPetName('');
    setDueDate('');
  };

  return (
    <div className="portal-card" role="region" aria-label="Pet Care Reminders">
      <div className="portal-card-header">
        <div className="card-title-group">
          <div className="card-icon-badge badge-blue" aria-hidden="true">
            <Bell size={18} />
          </div>
          <div>
            <h3 className="card-header-title">Pet Care Reminders</h3>
            <span className="card-header-sub">Track vaccination dates, deworming, and diet schedules</span>
          </div>
        </div>
      </div>

      {/* Add Reminder Form */}
      <form onSubmit={handleSubmit} className="reminder-form" aria-label="Quick reminder entry">
        <div className="reminder-field-group">
          <label htmlFor="quick-task" className="sr-only">Task Description</label>
          <input
            id="quick-task"
            type="text"
            className="reminder-input"
            placeholder="New task (e.g. Annual Rabies Booster)"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            required
            aria-label="New task name"
          />
        </div>

        <div className="reminder-field-group">
          <label htmlFor="quick-pet" className="sr-only">Pet Name</label>
          <input
            id="quick-pet"
            type="text"
            className="reminder-input"
            style={{ maxWidth: '140px' }}
            placeholder="Pet name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            aria-label="Pet name"
          />
        </div>

        <div className="reminder-field-group">
          <label htmlFor="quick-due" className="sr-only">Due Date</label>
          <input
            id="quick-due"
            type="date"
            className="reminder-date-input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            aria-label="Reminder due date"
          />
        </div>

        <button
          type="submit"
          className="add-reminder-btn"
          aria-label="Add reminder"
        >
          <Plus size={16} aria-hidden="true" />
          <span>Add</span>
        </button>
      </form>

      {/* Reminders List or Empty State (Rule 6) */}
      {reminders.length === 0 ? (
        <div className="empty-reminders-box" role="status">
          <CheckSquare size={32} color="#94a3b8" aria-hidden="true" />
          <p>All care tasks completed! Add a new reminder above.</p>
        </div>
      ) : (
        <ul className="reminders-list" role="list">
          {reminders.map((rem) => (
            <li key={rem.id} className="reminder-item">
              <div className="reminder-left">
                <input
                  type="checkbox"
                  className="reminder-checkbox"
                  checked={rem.completed}
                  onChange={() => onToggleReminder(rem.id)}
                  id={`rem-${rem.id}`}
                  aria-label={`Mark "${rem.task}" as ${rem.completed ? 'incomplete' : 'complete'}`}
                />
                <label htmlFor={`rem-${rem.id}`} style={{ cursor: 'pointer', flex: 1 }}>
                  <div className={`reminder-text ${rem.completed ? 'completed' : ''}`}>
                    {rem.task}
                  </div>
                  <div className="reminder-meta">
                    🐾 {rem.petName} &bull; <Calendar size={13} style={{ verticalAlign: '-1px' }} aria-hidden="true" /> Due: {rem.dueDate}
                  </div>
                </label>
              </div>
              <button
                type="button"
                className="reminder-delete-btn"
                onClick={() => onDeleteReminder(rem.id)}
                title={`Delete reminder "${rem.task}"`}
                aria-label={`Delete reminder "${rem.task}"`}
              >
                <Trash2 size={16} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
